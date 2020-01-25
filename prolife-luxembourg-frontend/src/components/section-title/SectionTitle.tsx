import React from 'react'
import Typography from '@material-ui/core/Typography'
import './SectionTitle.scss';

class SectionTitle extends React.Component<any,any> {
    render() {
        return (
            <Typography variant="h6" className='Title' color="inherit">
                {this.props.title}
            </Typography>
        )
    }


}

export default SectionTitle;
