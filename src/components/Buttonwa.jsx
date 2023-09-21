import { wa } from '../assets';

const Buttonwa = () => {
  return (
    <a
      href="https://wa.me/6285742068498"
      target="_blank"
      rel="noreferrer"
      className="fixed z-10 right-10 bottom-10 w-[50px] h-[50px]"
    >
      <img src={wa} alt="logowa" />
    </a>
  );
};

export default Buttonwa;
