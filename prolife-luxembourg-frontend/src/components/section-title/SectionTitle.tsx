import React from 'react'
import Typography from '@material-ui/core/Typography';
import './SectionTitle.scss';

class SectionTitle extends React.Component<any, any> {
    render() {
        return (
            <div className='section-title' >
                <Typography variant="h6" color="inherit">
                    {this.props.title}
                </Typography>
            </div>

        )
    }


}

export default SectionTitle;
