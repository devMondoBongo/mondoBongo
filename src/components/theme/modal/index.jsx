'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Modal as ModalComps } from '@/components/mb-ui/modal';

export default function Modal({ children, title }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(!open)}>
                <span className="flex items-center">
                    <span>Menu</span>
                </span>
            </Button>

            <ModalComps
                variant={'dialog'}
                title={title}
                open={open}
                setOpen={setOpen}
            >
                {children}
            </ModalComps>
        </>
    );
}
