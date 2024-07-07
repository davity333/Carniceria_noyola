import React from 'react';

function CardBlanca({children}){
    return(
        <>
        <div className=" h-44 w-[50rem] ml-16 rounded-[12px]
         mb-10 bg-stone-100 border-2 border-[#c55757a3]
        ">
            {children}

        </div>
        </>
    );
}
export default CardBlanca;

//shadow-[2px_5px_9px_1px_#00000078]

