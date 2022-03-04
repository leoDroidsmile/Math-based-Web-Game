import React, { Component, useEffect, useState } from 'react';
import ReactPlayer from "react-player";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'

export default function SizeExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        onOpen()
    }, []);

    return (
        <div className="player-wrapper">
            <Modal onClose={onClose} size="6xl" isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Video Player</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ReactPlayer
                            className='react-player'
                            url="https://stream.mux.com/D02iof00VDpNaWN02ZsrY4csqBi8jmz02OtR"
                            width="100%"
                            height="auto"
                            controls
                            playing={isOpen}
                            config={{ file: { forceHLS: true } }}
                            style={{ position: 'absolute', top: '0', left: '0' }}
                        />
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button colorScheme='blue' onClick={onClose}>Close</Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </div>
    )
}

// export default class VideoPlay extends Component {
//     render() {
//         return (
//             <div className='player-wrapper'>
//                 <ReactPlayer
//                     className='react-player'
//                     url="https://stream.mux.com/D02iof00VDpNaWN02ZsrY4csqBi8jmz02OtR"
//                     width="100%"
//                     height="auto"
//                     controls
//                     playing
//                     config={{ file: { forceHLS: true } }}
//                 />

//             </div>
//         )
//     }
// }

