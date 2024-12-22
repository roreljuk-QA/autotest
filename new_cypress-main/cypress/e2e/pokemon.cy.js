describe('Проверка авторизации', function () {

    it('1. Проверка покупки', function () {
         cy.visit('https://pokemonbattle.ru/'); //Зайти на сайт покемонов https://pokemonbattle.ru/
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // найти поле ввода почты, ввести почту 
         cy.get('#password').type('USER_PASSWORD'); // найти поле пароль, ввести пароль 
         cy.get('.auth__button').click(); // найти и нажать кнопку войти
         cy.get('.header__container > .header__id').click(); // найти и нажать на своего тренера
         cy.get('[href="/shop"]').click();  // найти и нажать смена аватара
         cy.get('.available > button').first().click({ force: true }); // выбрать аватар и нажать купить
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555555544444442'); // найти поле номер карты и ввести 5555 5555 4444 4442
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1224'); // найти поле срок и ввести 12/24
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // найти поле код и ввести 125
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Dikiy Test'); // найти поле и ввести Dikiy Test
         cy.wait(10000); // ожидание 10 сек
         cy.get('.pay-btn').click(); //найти и нажать кнопку оплатить  
         cy.get('#cardnumber').type('56456'); // найти поле код из пуша или смс и ввести 56456
         cy.get('.payment__submit-button').click(); // нажать оплатить
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
     })
})