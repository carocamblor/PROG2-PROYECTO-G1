var users = {
    list: [
        {
            name: 'Nicole',
            surname: 'Lapidus',
            biography: 'Mi nombre es Nicole Lapidus. Me apasiona cocinar y mucho mas comer. Hice varios cursos de cocina y partícipe en Masterchef.',
            level: 'Experto',
            posts: '100',
            username: 'nicolelapidus',
            dayBirth: '2001-09-18',
            image: 'images/nicole.jpg',
            idUser: '1'
        },
        {
            name: 'Tatiana',
            surname: 'Katz',
            biography: 'Hola!! Mi nombre es Tatiana. Hace un tiempo empece a cocinar y me encanta vender todas mis tortas. Es por eso que hice este perfil! Si te interesa alguna, no dudes en escribirme!',
            level: 'Avanzado',
            posts: '203',
            username: 'tatianakatz',
            dayBirth: '2002-03-19',
            image: 'images/tatiana.jpg',
            idUser: '2'
        },
        {
            name: 'Carolina',
            surname: 'Camblor',
            biography: 'Me dicen Caro. Recien a partir de la cuarentena empece a cocinar y me súper copa!',
            level: 'Principiante',
            posts: '55',
            username: 'carolinacamblor',
            dayBirth: '2002-04-9',
            image: 'images/carolina.jpg',
            idUser: '3'
        },
        {
            name: 'Julian',
            surname: 'Gomez',
            biography: 'Mi nombre es Julian. Desde chico cocino junto a mis hermanos.',
            level: 'Experto',
            posts: '3',
            username: 'juligomez_',
            dayBirth: '1990-08-8',
            image: 'images/julian.jpeg',
            idUser: '4'
        },
        {
            name: 'Nicolas',
            surname: 'Rodriguez',
            biography: 'Mi nombre es Nico y son fan n1 de la cocina! Me re copa hacer cosas locas!',
            level: 'Avanzado',
            posts: '49',
            username: 'nicorodri',
            dayBirth: '1960-12-1',
            image: 'images/nicolas.jpeg',
            idUser: '5'
        }
    ],
    findByUsername: function (username) {
        for (let i = 0; i < users.list.length; i++) {
            const element = users.list[i];
            if (element.username == username) {
                return element;
            };
        };
    },
};

module.exports = users;