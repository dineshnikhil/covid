import React from 'react'

function Nav() {
    return (
        <div className='bg-primary text-black flex justify-between py-4 px-6 drop-shadow-lg'>
            <div className='flex my-auto'>
                <div>
                    <h1 className='text-bold text-xl md:text-2xl'>
                        Covid
                    </h1>
                </div>
                <div>
                    <svg className='text-red-500' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-virus" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 7v-4m-1 0h2" />
                        <path d="M12 7v-4m-1 0h2" transform="rotate(45 12 12)" />
                        <path d="M12 7v-4m-1 0h2" transform="rotate(90 12 12)" />
                        <path d="M12 7v-4m-1 0h2" transform="rotate(135 12 12)" />
                        <path d="M12 7v-4m-1 0h2" transform="rotate(180 12 12)" />
                        <path d="M12 7v-4m-1 0h2" transform="rotate(225 12 12)" />
                        <path d="M12 7v-4m-1 0h2" transform="rotate(270 12 12)" />
                        <path d="M12 7v-4m-1 0h2" transform="rotate(315 12 12)" />
                    </svg>
                </div>
                <div>
                    <h1 className='text-xl md:text-2xl text-bold'>
                        Tracker
                    </h1>
                </div>
            </div>

            <div>
                <a href='https://www.who.int/health-topics/coronavirus#tab=tab_1' target='_blank' className='bg-shadecolor py-3 px-8 mx-2 rounded-xl text-bgcolor text-lg hover:bg-green-800'>
                    GetHelp
                </a>

                <a href='https://www.cowin.gov.in/' target='_blank' className='bg-shadecolor py-3 px-8 mx-2 rounded-xl text-bgcolor text-lg hover:bg-green-800 hidden md:inline'>
                    GetVaccine
                </a>
            </div>
        </div>
    )
}

export default Nav
