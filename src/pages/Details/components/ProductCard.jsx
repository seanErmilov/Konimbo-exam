import React from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Typography} from "@material-tailwind/react";

export const ProductCard = ({product}) => {
    return (
        <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-56">
                <img src={product.image.url}/>
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {product.title}
                </Typography>
                <Typography>
                    {product.desc}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 mt-auto">
                <Button size='sm' variant='text' color='blue'>Details</Button>
            </CardFooter>
        </Card>
    );
};
