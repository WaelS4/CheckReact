import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
const Main = () => {
    const posts = [
        {
            avatar: "img/avatar1.jpg",
            by: "Konbini techno",
            poster: "img/post1.png",
            description: "Sur Youtube, David Lafarge est LE boss des cartes Pokémon. Sans filtre, il nous raconte son parcours aussi flamboyant que controversé"
        },
        {
            avatar: "img/avatar2.jpg",
            by: "Domestika",
            poster: "img/post2.png",
            description: "Learn how to use the leading design software from scratch to create a great variety of vector designs"
        },
        {
            avatar: "img/avatar3.jpg",
            by: "Lingopie",
            poster: "img/post3.png",
            description: "Sooo.. when the DNA replicates, is it called “copy pasta?” Asking for a friend  "
        },

    ]
    return (
        <div>
            {posts.map(p => <Card style={{ width: '100%', backgroundColor: "gray", marginTop: 20 }}>

                <Card.Body>
                    <div class="row" >
                        <div className="col-sm-2"><Col xs={6} md={4}>
                            <Image
                                src={p.avatar}
                                style={{ width: 50 }}
                                roundedCircle
                            />
                        </Col></div>
                        <div className="col-sm-4">   <Card.Title>
                            {p.by} </Card.Title></div>
                    </div>
                    <Card.Text>
                        {p.description}
                    </Card.Text>
                    <Card.Img variant="top" src={p.poster} />
                </Card.Body>
            </Card>)}
        </div>
    )
}

export default Main
