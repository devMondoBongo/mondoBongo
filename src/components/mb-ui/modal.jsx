'use client';

import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/mb-ui/icons';

const variants = {
    wrapper: {
        dialog: 'items-end sm:items-center md:max-w-3xl',
        drawer: 'items-end',
    },
    container: {
        dialog: 'shadow-xl rounded-xl border sm:rounded-md ',
        drawer: 'shadow-xl rounded-xl-t border-t',
    },
    transition: {
        dialog: 'translate-y-full sm:translate-y-4',
        drawer: 'translate-y-full sm:translate-y-4',
    },
};

export function Modal({ title, children, open, setOpen, variant = 'dialog' }) {
    function onDrag(event, info) {
        // close when user drag to the bottom
        if (info.delta.y > 0) {
            setOpen(!open);
        }
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-background/75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 ">
                    <div className="flex h-screen items-center justify-center">
                        <Transition.Child
                            enter="transform transition ease-in-out duration-300 scale-95"
                            enterFrom={cn(
                                'opacity-0',
                                variants.transition[variant],
                            )}
                            enterTo="opacity-100 translate-y-0 scale-100"
                            leave="transform transition ease-in-out duration-500"
                            leaveFrom="opacity-100 translate-y-0 scale-100"
                            leaveTo={cn(
                                'opacity-0',
                                variants.transition[variant],
                            )}
                            className={cn(
                                'flex h-full w-full justify-center',
                                variants.wrapper[variant],
                            )}
                        >
                            <Dialog.Panel className="w-full sm:max-h-full">
                                <motion.div
                                    drag="y"
                                    dragConstraints={{ top: 0 }}
                                    dragElastic={false}
                                    onDragEnd={(event, info) =>
                                        onDrag(event, info)
                                    }
                                    className={cn(
                                        ' bg-background relative max-h-full overflow-y-auto px-4 pb-4 pt-5 text-left',
                                        variants.container[variant],
                                    )}
                                >
                                    <div className="">
                                        <div className="flex items-start justify-between">
                                            <Dialog.Title className=" font-semibold leading-6">
                                                {title}
                                            </Dialog.Title>
                                            <div className="ml-3 flex h-7 items-center">
                                                <Button
                                                    variant={'ghost'}
                                                    size={'sm'}
                                                    onClick={() => {
                                                        setOpen(!open);
                                                    }}
                                                >
                                                    <span className="sr-only">
                                                        Fermer
                                                    </span>
                                                    <Icons.close
                                                        className=" h-3 w-3"
                                                        aria-hidden="true"
                                                    />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    {children}
                                </motion.div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
