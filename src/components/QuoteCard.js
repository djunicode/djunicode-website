import { Grid } from '@material-ui/core'
import React from 'react'
import * as styles from '../styles/quotecard.module.scss'
import defaultAvatar from '../images/avatar.png'


function QuoteCard({quote, name, avatar}) {
    return (
        <Grid item xs={8} sm={5} lg={4}>
            <div className={styles.card}>
                <div className={styles.cardLayer}>
                    <div className={styles.imgContainer}>
                        <img src={avatar || defaultAvatar} alt="Avatar" />
                    </div>
                    <h3 className={styles.header}>{name}</h3>
                    <div className={styles.content}>
                        {quote}
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default QuoteCard