import { Photo } from "../types/Photo";
import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { v4 as createId } from 'uuid';

export const getAll = async () => {
    let list: Photo[] = [];

//cria referência para a pasta no Firebase
const imagesFolder = ref(storage, "images");

//Lê os arquivos na pasta no Firebase
const photoList = await listAll(imagesFolder);

for(let i in photoList.items){
    //gera um link para acessar a imagem
    let photUrl = await getDownloadURL(photoList.items[i]);

    //monta o array de fotos
    list.push({
        name: photoList.items[i].name,
        url: photUrl 
    });
}
    return list;
}

//Faz a verificação do tipo de arquivo para permitir a inserção de fotos
export const insert = async (file: File) => {
    if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)){
        let randomName = createId();
        let newFile = ref(storage, `images/${randomName}`);

        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref);
        
        return { name: upload.ref.name, url: photoUrl } as Photo;
    }else {
        return new Error('Tipo de arquivo não permitido.');
    }
}

export const deletePhoto = async (name: string) => {
    let photoRef = ref(storage, `images/${name}`);
    await deleteObject(photoRef);
}