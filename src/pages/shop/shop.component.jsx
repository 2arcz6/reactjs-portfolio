import React from 'react'
import './shop.styles.scss'

import SHOP_DATA from '../../shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'


class ShopPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        console.log(this.state.collections)
        return (
            <div className='shop-page'>
                <h1>Shop Page</h1>
                {
                    this.state.collections.map(({id, ...collection}) => (
                        <CollectionPreview key={id} {...collection} />
                    ))
                }
            </div>
            
        )
    }

}

export default ShopPage