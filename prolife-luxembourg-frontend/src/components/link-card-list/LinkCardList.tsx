import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import LinkCard from '../link-card/LinkCard';
import LinkCardListStateViewModel from './LinkCardListStateViewModel';
import './LinkCardList.scss';

class CoursesList extends Component<LinkCardListStateViewModel, any> {
    
    render() {
        return (
            <div className="link-card-list">
                { this.props.links ? (
                    <div>
                        <Grid container spacing={10} style={{padding: 24}}>
                            { this.props.links.map((currentLink, index) => (
                                <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
                                    <LinkCard key={index} data={currentLink} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}
export default CoursesList;