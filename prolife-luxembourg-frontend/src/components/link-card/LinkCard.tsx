import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CoursePropertiesViewModel from './LinkCardPropertiesViewModel'

const LinkCard = (props: CoursePropertiesViewModel) => {
    if (!props || !props.data) {
        return (
            <div></div>
        );
    }

    const { data } = props;

    return (
        <div>
            {props.data ? (
                <Card >
                    {data.icon ? data.icon :
                        <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
                            image={data.imageUrl}
                            title={data.title}
                        />
                    }

                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {data.title}
                        </Typography>
                        <Typography component="p">
                            {data.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={data.linkUrl}>
                            <p>{data.linkDescription}</p>
                        </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}
export default LinkCard;