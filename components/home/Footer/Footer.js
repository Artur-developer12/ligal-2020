import React from 'react';
import css from './footer.module.scss'
import  '../../../fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = ({footerData}) => {
  const {API_URL} = process.env


    return (
        <div className={css.footer}>
            <div className="container">
                <div className={css.footer_inner}>
                    <div className={css.footer_block}>
                        <div className={css.footer_info}>
                            <div className={css.footer_info_logo}>
                                <div className={css.footer_info_logo_img}>
                                    <img src='logo.svg' alt="logo"/>
                                </div>
                                <div className={css.footer_info_logo_text}>Лигал-2020</div>
                            </div>
                            <div className={css.footer_info_text}>Межрегиональный юридический форум </div>
                            <a href={`${API_URL + footerData.rule.url}`} download className={css.footer_info_link}>
                                Положение о форуме
                            </a>
                        </div>

                        <div className={css.footer_contacts}>
                            <div className={css.footer_contacts_title}>Контакты</div>
                            <div className={css.footer_contacts_item}>
                                <FontAwesomeIcon className={css.footer_contacts_item_icon} icon={['fa', 'phone-alt']}/>
                                <div className={css.footer_contacts_item_text}>
                                    {footerData.number}
                                </div>
                            </div>
                            <div className={css.footer_contacts_item}>
                                <FontAwesomeIcon className={css.footer_contacts_item_icon} icon={['fa', 'envelope']}/>
                                <div className={css.footer_contacts_item_text}>
                                    {footerData.email}
                                </div>
                            </div>
                        </div>

                        <div className={css.footer_contacts}>
                            <div className={css.footer_contacts_title}>Место проведения</div>
                            <div className={css.footer_contacts_item}>
                                <FontAwesomeIcon className={css.footer_contacts_item_icon} icon={['fa', 'map-marker-alt']}/>
                                <div className={css.footer_contacts_item_text}>
                                    {footerData.place}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={css.footer_Copyright}>
                        <div className={css.footer_Copyright_info}>
                            <div className={css.footer_Copyright_info_text}>
                                Copyright <FontAwesomeIcon icon={['far','copyright']}/> 2020 
                            </div>
                            <div className={css.footer_Copyright_info_text}>
                                Разработка сайтов и мобильных приложений,
                            </div>
                            <div className={css.footer_Copyright_info_text}>
                                Дышеков Артур 8-938-694-83-62
                            </div>
                        </div>
                        <div className={css.footer_Copyright_social}>
                            <a href={footerData.vkontact} target="_blank">
                                <FontAwesomeIcon  icon= {['fab',  'vk']} />
                            </a>
                            <a href={footerData.instagram} target="_blank">
                                <FontAwesomeIcon  icon= {['fab',  'instagram']} /> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
