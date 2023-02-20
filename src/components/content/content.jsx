import Promo from '../blocks/promo/promo.jsx';
import Spec from '../blocks/spec/spec.jsx';
import About from "../blocks/about/about.jsx";
import Contatcs from "../blocks/contacts/contatcs.jsx";
import Faq from "../blocks/faq/faq.jsx";

function Content() {
    return (
        <div className="content">
            <Promo />
            <Spec />
            <About />
            <Contatcs />
            <Faq />
        </div>
    );
}

export default Content;
