import React from 'react'
import { BillboardColumn } from './columns';
import Image from 'next/image';
interface ImageCellProps {
    data: BillboardColumn;
}

const ImageCell: React.FC<ImageCellProps> = ({
    data
}) => {
    return (
        data.image && (
            <div className=''>
                <Image
                    src={data.image}
                    alt='Image'
                    width={60}
                    height={60}
                />
            </div>

        )

    )
}

export default ImageCell