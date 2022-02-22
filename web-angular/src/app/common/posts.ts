export class Posts{
    public static posts = [
        //{ id: 1, title: "", publish_date: "", imgURL: "assets/img/posts/", description: "" },
        {
            id: 1,
            title: "Principios SOLID",
            publish_date: "21/02/2022",
            URL: "/test/",
            srcIMG: "assets/img/posts/post-1.jpg",
            tags: [{name: "Programación", color: "success"}, {name: "Buenas Prácticas", color: "warning"}, {name: "Principios", color: "danger"}],
            description: ""
        },
        {
            id: 2,
            title: "Propiedades ACID",
            publish_date: "21/02/2022",
            URL: "/test/",
            srcIMG: "assets/img/posts/post-2.jpg",
            tags: [{name: "Base de datos", color: "success"}, {name: "Buenas Prácticas", color: "warning"}, {name: "Transacciones", color: "danger"}],
            description: ""
        },/*
        {
            id: 3,
            title: "Propiedades ACID",
            publish_date: "21/02/2022",
            URL: "",
            srcIMG: "assets/img/posts/",
            tags: [{name: "Base de datos", color: "success"}, {name: "Buenas Prácticas", color: "warning"}, {name: "Transacciones", color: "danger"}],
            description: ""
        },*/
    ];
}