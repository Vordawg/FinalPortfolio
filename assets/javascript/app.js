function setCoverletter() {
    var paragraph = "";
    paragraph += "<p>I am a developer, technical leader, and business analyst. As ";
    paragraph += "a developer my responsibilities included: incorporating agreed changes into requirement ";
    paragraph += "specification and inform the affected team members; manage releases together with the project ";
    paragraph += "manager, ensure that change requests and bug fixes are weighed up against time and budget ";
    paragraph += "restrictions of the project; and ensure complete, up to date technical product documentation. I work ";
    paragraph += "in close collaboration with the business users to fully understand the business requirements that ";
    paragraph += "have to be reflected in the design and implementation; and review the business requirements ";
    paragraph += "continuously and identify unclear, incomplete, redundant, unrealistic or inconsistent requirements. ";
    paragraph += "As a technical leader, I support the users during user acceptance test and prioritize defects during ";
    paragraph += "user acceptance test; training new developers; developing and enhancing programming guidelines; ";
    paragraph += "conduct code reviews with all new hires and consultants to ensure version control of source code; ";
    paragraph += "and ensure the quality of deliverables.</p>";
    paragraph += "<p>I have an extensive amount of ";
    paragraph += "experience in coding, debugging, creating test plans and assisting with regressing testing and ";
    paragraph += "production support assisting the business users. I am quick to learn and eager to put my knowledge ";
    paragraph += "to work. Some of my business characteristics include commitment to self-improvement in order to ";
    paragraph += "achieve the highest levels of personal excellence, quality and integrity of business requirements ";
    paragraph += "and deliverables, the use of interpersonal skills to promote teamwork and business user ";
    paragraph += "satisfaction, and a strong sense of ownership and accountability for a job well done.</p>";
    paragraph += "It is my hope that I will have an opportunity to meet with you to discuss how my ";
    paragraph += "qualifications can address you employment needs. I can be reached on my mobile @ (203) 913-4013.";

    $(coverletter).html(paragraph);
}

function init() {
    setCoverletter();
}

init();

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});