// Posts to the /api/subscribe Vercel function. T holds the messages in the
// page's language; build.mjs defines it right above this file.
      (function () {
        var form = document.getElementById('signup');
        if (!form) return;
        var input = document.getElementById('email');
        var btn = document.getElementById('submit');
        var msg = document.getElementById('formmsg');

        function say(cls, text) { msg.className = 'formmsg ' + cls; msg.textContent = text; }

        form.addEventListener('submit', function (e) {
          e.preventDefault();
          var email = input.value.trim();
          msg.className = 'formmsg';
          if (!/^\S+@\S+\.\S+$/.test(email)) return say('bad', T.invalid);
          btn.disabled = true;
          btn.textContent = T.sending;
          fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email })
          })
            .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
            .then(function (res) {
              var d = res.d || {};
              if (res.ok && d.ok) {
                say('ok', T.ok);
                form.reset();
                window.tbTrack('generate_lead', { form: 'android_waitlist' });
              } else if (d.data && d.data.title === 'Member Exists') {
                // Mailchimp answers 400 for an address already on the list.
                // For the visitor that is a success, not an error.
                say('ok', T.exists);
              } else {
                // d.error is the boolean `true`, never text: show our own.
                say('bad', T.error);
              }
            })
            .catch(function () { say('bad', T.network); })
            .then(function () {
              btn.disabled = false;
              btn.textContent = T.button;
            });
        });
      })();
