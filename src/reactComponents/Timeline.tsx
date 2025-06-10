const Timeline = () => {
  return (
    <>
      <>
        <div className="h-full w-full flex justify-center">
          <div className="w-[90%] h-auto relative before:absolute before:h-full before:w-[2px] before:left-1/2 before:bg-accent-foreground before:-translate-x-1/2">
            <ul
              className="
        relative 
        [&>li]:w-[50%] 
        [&>li]:mb-10 
        [&>li]:bg-primary 
        [&>li]:text-white 
        [&>li]:rounded-lg 
        [&>li]:px-5 
        [&>li]:py-5 
        [&>li]:relative 
        [&>li:nth-child(odd)]:float-left
        [&>li:nth-child(odd)]:clear-right 
        [&>li:nth-child(odd)]:-translate-x-[30px]
        [&>li:nth-child(even)]:float-right 
        [&>li:nth-child(even)]:clear-left
        [&>li:nth-child(even)]:translate-x-[30px]
      "
            >
              <li>
                <h1 className="text-base font-medium mb-3">Heading 1</h1>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  debitis, consequatur nobis tenetur adipisci at velit
                  dignissimos exercitationem corporis fugit.
                </p>
              </li>
              <li>
                <h1 className="text-base font-medium mb-3">Heading 2</h1>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsam officiis sunt amet, sint tempore recusandae nesciunt
                  ducimus ab odio possimus?
                </p>
              </li>
              <li>
                <h1 className="text-base font-medium mb-3">Heading 3</h1>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  inventore mollitia, ipsam harum placeat hic suscipit! Quisquam
                  sapiente assumenda neque.
                </p>
              </li>
              <li>
                <h1 className="text-base font-medium mb-3">Heading 4</h1>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maiores officiis porro aperiam! Cum aspernatur dolore
                  voluptates facere molestias, voluptas atque.
                </p>
              </li>
              <li>
                <h1 className="text-base font-medium mb-3">Heading 5</h1>
                <p className="text-sm font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium earum dolorum iusto atque natus saepe nihil ullam
                  laborum maiores sint?
                </p>
              </li>
              <li>
                <h1 className="text-base font-medium mb-3">Heading 6</h1>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur voluptas sunt nesciunt nostrum magni aut odit
                  praesentium ut ea eligendi.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </>
    </>
  );
};

export default Timeline;
