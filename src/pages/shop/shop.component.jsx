import React from 'react'
import './shop.styles.scss'

import SHOP_DATA from '../../shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'


class ShopPage extends React.Component{
    constructor(props){
        super(props)

        console.log('shopCategory: ', props.match.params.shopCategory)

        
                

        this.state = {
            collections: SHOP_DATA,
            shopCategory: props.match.params.shopCategory,
            filteredData: []
        }
    }

    componentDidMount(){
        this.state.collections
                .filter((item, idx) => item.title.toLowerCase() === this.state.shopCategory)
                // .filter((item, idx) => console.log(item.title.toLowerCase() ))
                .map(item => (
                    // console.log(item)
                    this.setState({collections:[item]})
                ))
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