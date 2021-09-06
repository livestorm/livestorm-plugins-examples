import { Configuration } from '@livestorm/plugin'

const translations = {
  'fr': {
    'label': 'Partager un fichier Figma',
    'title': 'Partager un fichier Figma',
    'description': 'Pour partager un fichier Figma, veuillez copier le lien de partage du fichier que vous souhaitez partager puis coller le lien dans le champ ci-dessous.',
    'cancel': 'Annuler',
    'share': 'Partager',
    'warning': 'Veuillez noter que les participants pourront naviguer librement dans le document et que l\'enregistrement restera fixe sur le document que vous partagez.\nVeuillez vous assurer que le document n\'est pas privé sinon il n\'apparaitra pas dans le replay ou pour certains participants.',

  },
  'en': {
    'label': 'Share a Figma file',
    'title': 'Share a Figma file',
    'description': 'To share a Figma file, please copy the share link of the document you want to share and then paste the link in the field below.',
    'cancel': 'Cancel',
    'share': 'Share',
    'warning': 'Please note that participants will be able to navigate freely in the document and the recording will stay fixed on the document that you share.\nPlease make sure the document is not private otherwise it will not appear in the replay or for some attendees.',
  },
  'es': {
    'label': 'Compartir un archivo Figma',
    'title': 'Compartir un archivo Figma',
    'description': 'Para compartir un archivo Figma, copie el enlace del documento que desea compartir y luego pegue el enlace en el campo de abajo.',
    'cancel': 'Cancelar',
    'share': 'Compartir',
    'warning': 'Tenga en cuenta que los participantes podrán navegar libremente por el documento y la grabación se mantendrá fija en el documento que usted comparta.\nPor favor, asegúrese de que el documento no es privado, de lo contrario no aparecerá en la repetición o para algunos asistentes.',
  },
  'it': {
    'label': 'Condividi un file di Figma',
    'title': 'Condividi un file di Figma',
    'description': '"Per condividere un file di Figma, copiare il collegamento di condivisione del documento che si desidera condividere e quindi incollare il collegamento nel campo sottostante.',
    'cancel': 'Cancella',
    'share': 'Condividi',
    'warning': 'Tieni presente che i partecipanti potranno consultare liberamente il documento e la registrazione rimarrà fissa sul documento che condividi. Assicurati che il documento non sia privato altrimenti non apparirà nel replay o per alcuni partecipanti.',
  },
  'pt-BR': {
    'label': 'Compartilhe um arquivo Figma',
    'title': 'Compartilhe um arquivo Figma',
    'description': 'Para compartilhar um arquivo Figma, favor copiar o link de compartilhamento do documento que você deseja compartilhar e depois colar o link no campo abaixo.',
    'cancel': 'Cancelar',
    'share': 'Compartilhe\n',
    'warning': 'Observe que os participantes poderão navegar livremente no documento e a gravação permanecerá fixa no documento que você compartilhar.\nPor favor, certifique-se de que o documento não seja privado, caso contrário ele não aparecerá na reprodução ou para alguns participantes.',
  },
  'pt': {
    'label': 'Partilhar um ficheiro Figma',
    'title': 'Partilhar um ficheiro Figma',
    'description': 'Para partilhar um ficheiro Figma, copie o link de partilha do documento que quer partilhar e cole-o no campo abaixo.',
    'cancel': 'Cancelar',
    'share': 'Partilhar',
    'warning': 'Os participantes poderão navegar livremente no documento e a gravação ficará fixada no documento que partilhe.\nPor favor certifique-se de que o documento não é privado, caso contrário não aparecerá na gravação ou para alguns participantes.',
  },
}

export default function (): typeof translations[keyof typeof translations] {
  const locale = Configuration.locale

  if (translations[locale]) return translations[locale]
  return translations.en
}