import bebasSans from "@/app/utils/bebasnueue";

const InfoMenu = ({ menu }: { menu: string }) => {
  return (
    <div>
      <p
        className={`text-textPrimary font-extrabold text-8xl text-center my-9 ${bebasSans.className}`}
      >
        {menu}
      </p>
    </div>
  );
};

export default InfoMenu;
