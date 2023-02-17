import { Input, Select } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Button, ButtonGroup } from '@chakra-ui/react'

function Galleries(props: { }) {
    return (
        <>
            <Header />
            <hr/>
            <div className='grid justify-items-center container mx-auto'>
                <div className='text-5xl pt-24 pb-16 font-serif font-medium'>Galleries</div>
                <div className="flex items-center">
                    <Input className="border px-12 py-3" placeholder='Find a gallery'/>
                </div>
                <div>
                </div>
            </div>
        </>
    );
}

export { Galleries };
