import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './Experience.module.css';

export default function TechSkill({value,icon:Icon, color}) {
    const [progress, setProgress] = useState(0);

    return (
        <div 
            className={styles.techIcon}
            style={{width: 100, position: 'relative'}}
            onMouseEnter={() => setProgress(value)}
            onMouseLeave={() => setProgress(0)}
        >
            <CircularProgressbar
                value={progress}
                styles={buildStyles({
                    pathColor: color,
                    textColor: '#ffffff',
                    trailColor: '#444',
                    pathTransitionDuration: 0.6,
                })}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -45%)',
                }}
            >
                <Icon size={50} color={color} />
            </div>
        </div>

    );
}
