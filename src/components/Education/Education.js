import React from 'react';
import Style from './Education.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import uniLogo from './uni.jpg';
import cdacLogo from './cdac.jpg';


export default function Education() {
    const firstName = info.firstName.toLowerCase();

    function education() {
        return (
            <>
                <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                    education{firstName}</p>
                <p><span style={{ color: info.baseColor }}>education{firstName} <span
                    className={Style.green}>(main)</span> $</span>
                    <Box
                        component={'section'}
                        className={Style.education}
                    >
                        <Box
                            className={Style.educationHeader}
                        >
                            <span>🎓 Education</span>
                        </Box>
                        <Box
                            className={Style.educationContent}
                        >
                            {/* Content goes here */}
                            <div className={Style.educationItem}>
                                <img src={uniLogo} alt="University Logo" />
                                <div>
                                    <p>Bachelor of Engineering(BE) in Computer Science</p>
                                    <p>Sant Gadge Baba Amravati University, 2018-2022</p>
                                </div>
                            </div>
                            <div className={Style.educationItem}>
                                <img src={cdacLogo} alt="Institute Logo" />
                                <div>
                                    <p>Postgraduate Diploma in Advanced Computing (PG-DAC)</p>
                                    <p>Institute For Software Devlopment and Advance Computing, 2022-2023</p>
                                </div>
                            </div>
                        </Box>
                    </Box>
                </p>
            </>
        );
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={education()} />
        </Box>
    );
}