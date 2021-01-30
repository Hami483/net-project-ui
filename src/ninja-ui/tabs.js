import './styles/tabs.css';

class Tabs{
    constructor(container){
        this.container=container;
        this.tabs=container.querySelectorAll('.trigger');
    }
    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e  => {
                if(e.target.tagName === 'LI'){
                    this.toggleTabs(e);
                    this.toggleContent(e);
                }
            })
        })
    }
    toggleTabs(e){
        //remove active class
        this.tabs.forEach(tab => tab.classList.remove('active'))

        //add active class
        e.target.classList.add('active');
    }
    toggleContent(e){
        //remove active class
        this.container.querySelectorAll('.content').forEach(item => item.classList.remove('active'))
        //add active class
        const selector = e.target.getAttribute('data-target');
        const content=this.container.querySelector(selector);

        content.classList.add('active');
    }
}

export {Tabs as default}