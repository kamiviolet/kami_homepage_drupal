/**
 * @file
 * Global utilities.
 *
 */
(function (Drupal) {
  'use strict';

  Drupal.behaviors.bootstrap_uranus = {
    attach: function (context, settings) {
      console.log('context');
      console.log(context);
      console.log('settings');
      console.log(settings);

      context.querySelectorAll('.navbar-toggler').forEach(function (element) {
        element.innerHTML = `
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        `;
        element.addEventListener('click', function (event) {
          let targetId = event.target.closest('.navbar-toggler')?.dataset['target'];
          let targetEl = document.querySelector(targetId);
          if (targetEl) {
            targetEl.classList.toggle('collapse');
            event.target.closest('.navbar-toggler').classList.toggle('is-expanded');
         }
        })
      })
    },
  };
})(Drupal);
