describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // найти кнопку забли пароль и провреить цвет

         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажал войти
         
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // элемент содержит текст
         cy.get('#messageHeader').should('be.visible'); // текст об авторизации виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик, виден для пользователя
         cy.wait(10000); // ожидание 10 сек
        
     })
        
     it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // найти кнопку забли пароль и провреить цвет

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio11'); // ввели екверный пароль
        cy.get('#loginButton').click(); // нажал войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // элемент содержит текст
        cy.get('#messageHeader').should('be.visible'); // текст о пароле виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик, виден для пользователя
    })

    it('Прорерка что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // найти кнопку забли пароль и провреить цвет

        cy.get('#mail').type('germandolnikov.ru'); // ввели верный логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввели екверный пароль
        cy.get('#loginButton').click(); // нажал войти

    
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // элемент содержит текст
        cy.get('#messageHeader').should('be.visible'); // текст о пароле виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик, виден для пользователя
    })

    it('Прорерка востановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // найти кнопку забли пароль и провреить цвет
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин

        cy.get('#forgotEmailButton').click(); // нажимаю востановить пароль
        
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // элемент содержит текст
        cy.get('#forgotForm > .header').should('be.visible'); // текст о пароле виден пользователю
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // есть крестик, виден для пользователя

        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели верную почту
        cy.get('#restoreEmailButton').click(); // нажимаю отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // подтвержденеи отправки пароля на почту
    })
 })