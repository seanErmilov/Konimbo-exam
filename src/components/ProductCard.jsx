import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';


function formatPrice(amount) {
    return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(amount);
}

export function ProductCard({ product, viewMode }) {
    return (
        <Card className="mt-6" style={{ direction: 'rtl' }}>
            <CardHeader color="blue-gray" className="relative h-56">
                <img className='w-full h-full object-cover' src={product.image.url} />
            </CardHeader>
            <CardBody>
                <div className='flex items-center gap-4'>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {product.title}
                    </Typography>
                    <Typography variant="h5" color="green" className="mb-2">
                        {formatPrice(product.price)}
                    </Typography>
                </div>
                {viewMode &&
                    <Typography>
                        {product.desc}
                    </Typography>}
            </CardBody>
            {!viewMode &&
                <CardFooter className="pt-0 mt-auto">
                    <Button size='sm' variant='text' color='blue'>
                        <Link to={`${product.id}`} className='title'>Details</Link>
                    </Button>
                </CardFooter>}
        </Card>
    );
}
