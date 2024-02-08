const Container = ({ children }) => {
  return (
    <section className="w-[1230px] max-[1250px]:w-[90%] mx-auto p-2">
      {children}
    </section>
  );
};

export default Container;
