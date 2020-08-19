class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0
        this.activeSlide(1);
    }
    activeSlide(index) {
        this.active = index;
        this.items = this.slide.querySelectorAll('.slide-items > *');
        this.items.forEach(item => item.classList.remove('active'));
        this.items[index].classList.add('active');
    }

    prev() {

    }

    next() {
        this.activeSlide(this.active + 1);
    }

    addNavigation() {
        const nextBtn = this.slide.querySelector('.slide-next');
        nextBtn.addEventListener('click', this.next);
        console.log("dsdsdsds");
    }

    init() {
        this.next = this.next.bind(this);
        this.addNavigation();
    }

}

new SlideStories(`slide`);