import React from "react";
import MenuItem from "../components/menu-item";
import './directory.css'

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections:[
                {
                    title: 'HATS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkurl: 'hats'
                },
                {
                    title: 'JACKETS',   
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkurl: 'jackets'
                },
                {
                    title: 'SHOES',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkurl: 'shoes'
                },
                {
                    title: 'WOMENS',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    size: 'large',
                    linkurl: 'womens'
                },
                {
                    title: '   MENS',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    size: 'large',
                    linkurl: 'mens'
                }
            ]
        }
    }

    render() {

        return (
            <div className="directory-menu">
                {this.state.sections.map(({title, imageUrl, id, size,linkurl})=> (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkurl={linkurl}/>
                ))}
            </div>
        )
    }
}

export default Directory;