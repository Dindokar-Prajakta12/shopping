import React from 'react'
// import css from './Footer.module.css'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import { InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UserIcon, LinkIcon } from "@heroicons/react/outline"

const Footer = () => {
    return (
    <div className={css.cFooterWrapper}>
        <hr/>

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt=''></img>
                <span>amazon</span>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact US</span>
                    <span className={css.pngLine}>

                    <LocationMarkerIcon className={css.icon}/>
                    <span>111 north avenue Orlando , FL 32801</span>
                    </span>
                    <span children={css.pngLine}>
                        {" "}
                        <PhoneIcon className={css.icon} />
                        <a href='tel:352-306-4415'> 352-306-4415</a>
                    </span>
                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon}/>
                        <a href='mailto:support@amazon.com'>support@amazon.com</a>
                    </span>

                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Accoumt</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon} /> Sign In
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>company</span>
                    <span className={css.pngLine}>
                        <UserIcon className={css.icon} />
                        <a href="/about">
                        <p>About US</p></a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon} />
                        <p>Safety Privacy & Terms</p>
                    </span>
                </div>
            </div>
        </div>

        <div className={css.copyRight}>
            <span>copyRight @2022 by amazon , Inc.</span>
            <span>All rights reserved</span>           
        </div>
      
    </div >
  )
}

export default Footer
