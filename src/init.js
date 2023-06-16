import 'bootstrap';

const render = (state, formEl) => {
  // ...
};

export default () => {
  const state = {
    formState: {
      valid: false,
      errors: [],
      fields: {
        name: '',
      },
    },
    posts: [],
  };

  const formEl = document.querySelector("form");
  const resetEl = document.querySelector("button");

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    // меняем состояние

    render(state, formEl);
  });

  resetEl.addEventListener('click', () => {
    // меняем состояние

    render(state, formEl);
  });
};
