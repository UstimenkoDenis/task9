// первое с чего начинается любой проект - это назначение определенного обработчика событий
// на всю нашу страницу, тк мы не можем знать сколько по времени загружается
// страница в браузер. Страница еще может быть не загружена а наш script уже начнет
// что то изменять и можем получить ошибку. Для того чтобы этого не происходило
// можно применить разные обработчики событий
// window.addEventListener('load') // это когда загружается страница полностью с картинками
                                    // это не совсем то что нужно
// Самое важное для нас чтобы было построено DOM дерево
// и мы в js не могли получить ошибок
// поэтому используем другое событие:
//window.addEventListener('DOMContentLoaded', )

//  Открываем проект и и видим в одном из первых блоков кашу
// Что такое табы? - от нас требуется чтобы на странице показывался только один 
// блок например здоровый позвоночник с описанием с кнопкой и с картинкой
// остальные блоки должны быть скрыты. И только при переключении между вкладками
// они должны показываться - это и есть самые простые табы
// для того чтобы написать этот скрипт нам понадобятся три вещи:
// во первых сам таб контент, каждый пункт (лечение, отдых и тд), а также 
// родитель который включает все эти пункты
window.addEventListener('DOMContentLoaded', function(){
'use strict'; // переходим в строгий режим

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    // функция которая будет скрывать наши табы
    function hideTabContent(a){
        for(let i = a;i < tabContent.length; i++){

            tabContent[i].classList.remove('show'); // удаляем с каждого таба класс show
            tabContent[i].classList.add('hide'); // и полностью скроем со страницы

        }
    }
    
    hideTabContent(1); // скроются все табконтенты кроме первого

    // функция которая будет показывать табконтент
    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){ // если содежит класс hide
            tabContent[b].classList.remove('hide'); // удаляем с каждого таба класс hide
            tabContent[b].classList.add('show'); // показываем
        }
    }

    // ставим обработчик событий на info (делегирование событий)
    info.addEventListener('click', function(event){
        let target = event.target;
        
        if(target && target.classList.contains('info-header-tab')){
            
            for(let i = 0; i < tab.length; i++ ){
                if(target == tab[i]){
                    hideTabContent(0); // скрываем все табы
                    showTabContent(i); // показываем нужный таб
                    break; // чтобы цикл дальше не работал
                }
            }
        }
    });
})                                