let sliders = document.querySelectorAll('.range-slider');

for (let i = 0; i < sliders.length; i++) {
    init_slider(sliders[i]);
}

function init_slider(slider) {
    const range = slider.querySelectorAll('.progress__range');
    const progress = slider.querySelector('.progress__line');
    let gap = 1;

    const inputMin = slider.querySelector('.value__min');
    const inputMax = slider.querySelector('.value__max');


    range.forEach(input => {
        input.addEventListener('input', event => {
            let minrange = parseInt(range[0].value);
            let maxrange = parseInt(range[1].value);
            console.log(minrange)
            inputMin.style.left = minrange + '%';
            inputMax.style.left = maxrange + '%';



            if (maxrange - minrange < gap) {


                if (event.target.className === 'progress__min progress__range') {

                    range[0].value = maxrange - gap;

                }
                else {
                    range[1].value = minrange + gap;
                }
            }
            else {
                progress.style.left = (minrange / range[0].max) * 100 + '%';
                progress.style.right = 100 - (maxrange / range[1].max) * 100 + '%';

                inputMin.innerHTML = `${newArray[minrange]}`;
                inputMax.innerHTML = `${newArray[maxrange]}`;


            }


        });

    });



    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    const year = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];



    const newArray = [];

    year.forEach(y => {
        month.forEach(m => {
            newArray.push(y + '  ' + m)
        })

    })

}




