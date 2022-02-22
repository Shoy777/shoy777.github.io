export class GlobalConstants{
    //https://www.itsolutionstuff.com/post/how-to-declare-global-variable-in-angular-8example.html
    public static siteWebName: string = "Froilan Cerna";
    public static designedBy: string = "Shoy 777";
    public static poweredBy: string = "Angular y GitHub Pages";
    public static miPerfil: string = "Desarrollador .NET";
    //public static tecnologias: string = "Especializado en las  siguientes tecnologías y lenguajes: C#, JavasScript, CSS3, HTML5, entre otros";
    public static tecnologias: string = "Técnico en computación e informática con más de 4 años de experiencia como desarrollador, creando soluciones webs, en el sector financiero de fondos colectivos";
    
    public projects: Array<any> = [
        {id: 1, name: "Tienda Online", srcIMG : "./assets/img/projects/project-1.png", URL: "/FireDrink", description: "Tienda Online Proyecto - 2015"},
        {id: 2, name: "Estudio Contable", srcIMG : "./assets/img/projects/project-2.png", URL: "/Estudio-Contable", description: "Página Web Estudio Contable - 2016"},
        {id: 3, name: "Landing Page Adidas Ice Dive", srcIMG : "./assets/img/projects/project-4.png", URL: "/Landingpage-Adidas-Ice-Dive", description: "Mi Primer Landing Page - 2016"},
        {id: 4, name: "One Piece Site", srcIMG : "./assets/img/projects/project-5.png", URL: "/One-Piece-Site", description: "Página Web usando Bootstrap 3 - 2017"},
        {id: 5, name: "Mi Web Anterior", srcIMG : "./assets/img/projects/project-6.png", URL: "/web-anterior", description: "Mi primera Página Web con GitHub Pages - 2017"},
        {id: 6, name: "Sorteo", srcIMG : "./assets/img/projects/project-3.png", URL: "/sorteo", description: "Sorteo por el Día de la Mujer - 2018"},
        {id: 7, name: "", srcIMG : "", URL: "/", description: ""},
    ];

    public static resumeSummary: string = "Técnico egresado de computación e informática con 4 años de experiencia, \
        creando soluciones webs para el rubro financiero de fondos colectivos. Autodidacta y comprometido.\
        Deseo desarrollarme en un ambiente de trabajo que me lleve a explorar nuevas fronteras de \
        conocimiento y aprendizaje para un mejor desarrollo de mi vida laboral, académica y profesional";
    public static resumeSummary2: string = "Durante mi vida académica y laboral he trabajado con algunos lenguajes de \
        programación (C#, JavaScript, Java, PHP), gestores de base de datos (SQL, MySQL, MariaDB, Oracle), y con \
        diversos frameworks y librerías; tales como: MVC .NET, Web Forms .NET, Web API, WCF, .NET Core, Entity \
        Framework, Java (JSF, Struts, JPA), jQuery, Datatables, jsPDF, Angular, Laravel, entre otros. \
        Tengo como objetivo alcanzar un nivel de autosuficiencia alto, para poder desenvolverme como arquitecto \
        de software y poder crear soluciones con todo tipo de tecnologías que estén a la vanguardia de la \
        constante evolución que esta presenta.";
}