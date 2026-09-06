// Posts to the same /api/subscribe Vercel function the React pages use.
      (function () {
        var form = document.getElementById('signup');
        var input = document.getElementById('email');
        var btn = document.getElementById('submit');
        var msg = document.getElementById('formmsg');

        form.addEventListener('submit', function (e) {
          e.preventDefault();
          var email = input.value.trim();
          msg.className = 'formmsg';
          if (!/^\S+@\S+\.\S+$/.test(email)) {
            msg.className = 'formmsg bad';
            msg.textContent = 'Please enter a valid email address.';
            return;
          }
          btn.disabled = true;
          btn.textContent = 'Sending...';
          fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email })
          })
            .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
            .then(function (res) {
              if (res.ok && res.d && res.d.ok) {
                msg.className = 'formmsg ok';
                msg.textContent = "You're on the list. We'll write the day it launches.";
                form.reset();
              } else {
                msg.className = 'formmsg bad';
                msg.textContent = (res.d && res.d.error) || 'Something went wrong. Please try again.';
              }
            })
            .catch(function () {
              msg.className = 'formmsg bad';
              msg.textContent = 'Network error. Please try again later.';
            })
            .then(function () {
              btn.disabled = false;
              btn.textContent = 'Notify me';
            });
        });
      })();
