import styles from "./Contact.module.scss";
import {TableSection} from "../../components/TableSection/TableSection";
import {ImageLink} from "../../components/ImageLink/ImageLink";

import githubLogo from "../../assets/images/github.svg"
import emailLogo from "../../assets/images/buttons/mailClosed.svg"
import language from "../../assets/language/language";


export default function Contact() {
    return (
        <div className={styles.Contact}>
            <TableSection tableTitle={"Find me here"}>
                <ImageLink imageSource={githubLogo} imageSubtitle={"Github"}
                           imageAltText={"Github"}
                           imageLink={language.LINK_GITHUB}/>
                <ImageLink imageSource={emailLogo} imageSubtitle={"Email"}
                           imageAltText={"E-Mail"}
                           imageLink={language.LINK_EMAIL}/>

            </TableSection>
        </div>
    );
}
