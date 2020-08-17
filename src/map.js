export const initLocal = () => {
  let citySelect = document.querySelector(`.header__city select`);
  let headerAddress = document.querySelector(`.header__address`);
  let footerAddress = document.querySelector(`.footer__address span`);
  let contactsCitySelect = document.querySelector(`.contacts__city select`);

  function changeForm(val) {
    let form = document.querySelector(`.map__info`);
    let address = form.querySelector(`.map__address`);
    let phone1 = form.querySelector(`.map__phone--1 span`);
    let phone2 = form.querySelector(`.map__phone--2 span`);
    let phoneLink1 = form.querySelector(`.map__phone--1`);
    let phoneLink2 = form.querySelector(`.map__phone--2`);
    const map = document.querySelector(`.map__widget`);
    const cityMaps = map.querySelectorAll(`.map__city`);
    cityMaps.forEach((it) => it.classList.add(`map__city--hide`));

    if (val === `Astrachan`) {
      address.textContent = `ул. Боевая, 14`;
      phone1.textContent = `+7(988) 172-87-76`;
      phone2.textContent = `+7(8512) 42-87-76`;
      phoneLink1.href = `tel:89881728776`;
      phoneLink2.href = `tel:88512428776`;
      cityMaps[0].classList.remove(`map__city--hide`);
    }
    if (val === `Stavrapol`) {
      address.textContent = `ул. Мира, 276`;
      phone1.textContent = `+7(962) 455–82–99`;
      phone2.textContent = `+7(8652) 65–82–99`;
      phoneLink1.href = `tel:89624558299`;
      phoneLink2.href = `tel:88652658299`;
      cityMaps[1].classList.remove(`map__city--hide`);
    }
    if (val === `Tymen`) {
      address.textContent = `ул. Республики, 61`;
      phone1.textContent = `+7(952) 678–93–94`;
      phone2.textContent = `+7(3452) 96–93–94`;
      phoneLink1.href = `tel:89526789394`;
      phoneLink2.href = `tel:83452969394`;
      cityMaps[2].classList.remove(`map__city--hide`);
    }

    if (val === `Omsk`) {
      address.textContent = `г.Омск ул. Карла Маркса 41/1 офис 426`;
      phone1.textContent = `+8(9502) 11–88–09`;
      phone2.textContent = `+8(800) 201-06-72`;
      phoneLink1.href = `tel:89502118809`;
      phoneLink2.href = `88002010672`;
      cityMaps[3].classList.remove(`map__city--hide`);
    }
  }

  function changeInfo(val) {
    if (val === `Astrachan`) {
      headerAddress.textContent = `ул. Боевая, 14`;
      footerAddress.textContent = `ул. Боевая, 14`;
    }
    if (val === `Stavrapol`) {
      headerAddress.textContent = `ул. Мира, 276`;
      footerAddress.textContent = `ул. Мира, 276`;
    }
    if (val === `Tymen`) {
      headerAddress.textContent = `ул. Республики, 61`;
      footerAddress.textContent = `ул. Республики, 61`;
    }

    if (val === `Omsk`) {
      headerAddress.textContent = `ул. Карла Маркса 41/1 оф 426`;
      footerAddress.textContent = `ул. Карла Маркса 41/1 оф 426`;
    }
  }

  citySelect.addEventListener(`change`, function (evt) {
    changeInfo(evt.target.value);

    if (contactsCitySelect) {
      contactsCitySelect.value = evt.target.value;
      changeForm(evt.target.value);
    }
  });

  if (contactsCitySelect) {
    contactsCitySelect.addEventListener(`change`, function (evt) {
      citySelect.value = evt.target.value;
      changeInfo(evt.target.value);
      changeForm(evt.target.value);
    });
  }
};
