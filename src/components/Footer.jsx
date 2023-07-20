import React from 'react'
import appLogo from '../assets/netzoon-logo.png';
import mapImg from '../assets/map.png';
const Footer = () => {
    return (
        <footer class="p-4 bg-gray-50    sm:p-6">
            <div class="mx-auto max-w-screen-xl">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="#" class="flex items-center">
                            <img src={appLogo} class="mr-3 h-16" alt="Netzoon Logo" />
                            {/* <span class="self-center text-2xl font-semibold whitespace-nowrap text-main">Netzoon</span> */}
                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Contact us</h2>
                            <ul class="text-gray-600 dark:text-gray-400">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline ">Opinions</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Complaints</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Leave Your Question</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Special Request</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                            <ul class="text-gray-600 dark:text-gray-400">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className='w-96 h-64'>
                            <img className='w-full h-full object-cover' src={mapImg} />
                        </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 lg:my-8" />
                <div className="">
                    <div class="flex justify-center">
                        <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-96 mx-2 hover:bg-main hover:text-white">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8" />
                            <div class="text-left ml-3 ">
                                <p class='text-xs text-gray-700'>Download on </p>
                                <p class="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                        <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-96 mx-2 hover:bg-main hover:text-white">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8" />
                            <div class="text-left ml-3">
                                <p class='text-xs text-gray-700'>Download on </p>
                                <p class="text-sm md:text-base"> Apple Store </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer