import React from 'react';
import {uesState} from 'react';
import {makeStyles} from '@material-ui/core';
import SearchBar from './SearchBar';
import List from './List';
import SelectedList from './SelectedList';
import Modal from './Modal';

const useStyles = makeStyles((theme) => {
    return {
        searchSection:{}
    }
});

const ProductPanel = () =>{
    const classes = useStyles();
    return (
        <>
        <div className={classes.searchSection}>
            <SearchBar/>
            <span className={classes.recommended}>Recommended Flavours</span>
            <span className={classes.other}>Other Flavours</span>
            <span className={classes.caution}>Caution Flavours</span>
        </div>
        <div className={classes.banner}>
            <span className={classes.selectedProducts}>Selected Products</span>
            <span className={classes.product}>Product</span>
            <span className={classes.price}>Price</span>
            <span className={classes.vends}>Vends</span>
            <span className={classes.revenue}>Revenue</span>
            <span className={classes.netGain}>Net Gain</span>

        </div>
        </>
    )
}


export default ProductPanel;