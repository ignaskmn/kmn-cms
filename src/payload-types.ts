/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    projects: Project;
    pages: Page;
    events: Event;
    'catalog-items': CatalogItem;
    news: News;
    images: Image;
    documents: Document;
    recordings: Recording;
    tags: Tag;
    audio: Audio;
    photos: Photo;
    forms: Form;
    'form-submissions': FormSubmission;
  };
  globals: {
    featured: Featured;
    menu: Menu;
    information: Information;
    partners: Partner;
    facilities: Facility;
    team: Team;
    volunteering: Volunteering;
    footer: Footer;
    ucbanner: Ucbanner;
    cookies: Cooky;
    readingRoom: ReadingRoom;
  };
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  enableAPIKey?: boolean;
  apiKey?: string;
  apiKeyIndex?: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Project {
  id: string;
  slug?: string;
  title: string;
  type: 'residency' | 'exhibition' | 'education' | 'sound' | 'screen' | 'massEvent';
  ongoing?: boolean;
  once?: boolean;
  start?: string;
  end?: string;
  lexicalRichText: {
    [k: string]: unknown;
  }[];
  image?: string | Image;
  sortingByYear?: boolean;
  datedDescriptions?: {
    datedDescriptionYear: number;
    datedImage?: string | Image;
    datedLexicalRichText: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  layout?: (
    | {
        title: string;
        participants?: {
          firstName: string;
          lastName: string;
          nationality?: string;
          bio: {
            [k: string]: unknown;
          }[];
          yearsParticipated?: {
            participationYear?: number;
            id?: string;
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'participants';
      }
    | {
        content?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'richText';
      }
    | {
        image?: string | Image;
        floatingImageNumber?: string;
        section?: {
          sectionTitle: string;
          expandOnLoad?: boolean;
          blocks?: (
            | {
                participants?: {
                  name: string;
                  subtext?: string;
                  content?: {
                    [k: string]: unknown;
                  }[];
                  id?: string;
                }[];
                id?: string;
                blockName?: string;
                blockType: 'participantsBlock';
              }
            | {
                events?: {
                  event?: string | Event;
                  id?: string;
                }[];
                id?: string;
                blockName?: string;
                blockType: 'eventListBlock';
              }
            | {
                lexicalRichText?: {
                  [k: string]: unknown;
                }[];
                id?: string;
                blockName?: string;
                blockType: 'richText';
              }
            | {
                youtubeId?: string;
                id?: string;
                blockName?: string;
                blockType: 'videoBlock';
              }
            | {
                programItems?: {
                  name: string;
                  subtext?: string;
                  content?: {
                    [k: string]: unknown;
                  }[];
                  id?: string;
                }[];
                id?: string;
                blockName?: string;
                blockType: 'programItemsBlock';
              }
          )[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'programBlock';
      }
  )[];
  events?: {
    event: string | Event;
    id?: string;
  }[];
  news?: {
    news: string | News;
    id?: string;
  }[];
  photos?: {
    photoAlbum: string | Photo;
    photoAlbumYears?: {
      photoAlbumYear: number;
      id?: string;
    }[];
    id?: string;
  }[];
  audio?: {
    audioSeries: string | Audio;
    audioSeriesYears?: {
      audioSeriesYear: number;
      id?: string;
    }[];
    id?: string;
  }[];
  videos?: {
    videoId: string;
    videoYears?: {
      videoYear: number;
      id?: string;
    }[];
    id?: string;
  }[];
  tags?: string[] | Tag[];
  meta?: {
    title?: string;
    description?: string;
    image?: string | Image;
  };
  updatedAt: string;
  createdAt: string;
}
export interface Image {
  id: string;
  alt: string;
  blurhash?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    thumbnail?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    full?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    fb?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    square?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    card?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    fbCard?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    squareCard?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface Event {
  id: string;
  slug?: string;
  title: string;
  start: string;
  recurring?: boolean;
  end?: string;
  recurringDates?: {
    spans?: {
      spanStart?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
      spanEnd?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
      spanTimeStart?: string;
      spanTimeEnd?: string;
      id?: string;
    }[];
  };
  fb?: string;
  lexicalRichText: {
    [k: string]: unknown;
  }[];
  image?: string | Image;
  external?: boolean;
  venue?: string;
  address?: string;
  layout?: (
    | {
        title: string;
        participants?: {
          firstName: string;
          lastName: string;
          nationality?: string;
          bio: {
            [k: string]: unknown;
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'participants';
      }
    | {
        title: string;
        programItem?: {
          programItemTitle: string;
          programItemDescription: {
            [k: string]: unknown;
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'program';
      }
  )[];
  tags?: string[] | Tag[];
  meta?: {
    title?: string;
    description?: string;
    image?: string | Image;
  };
  updatedAt: string;
  createdAt: string;
}
export interface Tag {
  id: string;
  tag?: string;
  updatedAt: string;
  createdAt: string;
}
export interface News {
  id: string;
  slug?: string;
  title: string;
  lexicalRichText?: {
    [k: string]: unknown;
  }[];
  image: string | Image;
  tags?: string[] | Tag[];
  meta?: {
    title?: string;
    description?: string;
    image?: string | Image;
  };
  updatedAt: string;
  createdAt: string;
}
export interface Photo {
  id: string;
  title: string;
  albumId: string;
  date?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Audio {
  id: string;
  title: string;
  recordings?: {
    recording: string | Recording;
    image: string | Image;
    recTitle?: string;
    recHost?: string;
    date?: string;
    txt?: string;
    bg?: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Recording {
  id: string;
  blurhash?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Page {
  id: string;
  title: string;
  slug: string;
  lexicalRichText?: {
    [k: string]: unknown;
  }[];
  image?: string | Image;
  blocks?: {
    email?: string;
    tel?: string;
    id?: string;
    blockName?: string;
    blockType: 'contactsBlock';
  }[];
  meta?: {
    title?: string;
    description?: string;
    image?: string | Image;
  };
  updatedAt: string;
  createdAt: string;
}
export interface CatalogItem {
  id: string;
  title: string;
  author?: string;
  publisher?: string;
  year?: number;
  pages?: number;
  isbn?: string;
  lexicalRichText?: {
    [k: string]: unknown;
  }[];
  cover?: string | Image;
  coverLink?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Document {
  id: string;
  blurhash?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Form {
  id: string;
  title: string;
  fields?: (
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        defaultValue?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'checkbox';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'country';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        message?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'message';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        options?: {
          label: string;
          value: string;
          id?: string;
        }[];
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'select';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'state';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'textarea';
      }
  )[];
  submitButtonLabel?: string;
  confirmationType?: 'message' | 'redirect';
  confirmationMessage: {
    [k: string]: unknown;
  }[];
  redirect?: {
    url: string;
  };
  emails?: {
    emailTo?: string;
    cc?: string;
    bcc?: string;
    replyTo?: string;
    emailFrom?: string;
    subject: string;
    message?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData?: {
    field: string;
    value: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Featured {
  id: string;
  items?: {
    type?: 'news' | 'events' | 'projects';
    item?: string | Project;
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Menu {
  id: string;
  menuItems?: {
    label?: string;
    slug?: string;
    submenu?: boolean;
    submenuItems?: {
      label?: string;
      slug?: string;
      id?: string;
    }[];
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Information {
  id: string;
  informationBlocks?: {
    title: string;
    layout?: (
      | {
          content?: {
            label: string;
            file: string | Document;
            id?: string;
          }[];
          id?: string;
          blockName?: string;
          blockType: 'infoDoc';
        }
      | {
          content?: {
            [k: string]: unknown;
          }[];
          id?: string;
          blockName?: string;
          blockType: 'richText';
        }
      | {
          title: string;
          content?: {
            label: string;
            file: string | Document;
            id?: string;
          }[];
          id?: string;
          blockName?: string;
          blockType: 'infoCollapse';
        }
      | {
          content?: {
            label: string;
            file: string | Document;
            id?: string;
          }[];
          id?: string;
          blockName?: string;
          blockType: 'infoBoxes';
        }
      | {
          title: string;
          content?: {
            [k: string]: unknown;
          }[];
          id?: string;
          blockName?: string;
          blockType: 'textCollapse';
        }
    )[];
    alwaysOpen?: boolean;
    sortByTitle?: boolean;
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Partner {
  id: string;
  partners?: {
    link: string;
    image: string | Image;
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Facility {
  id: string;
  facilityBlocks?: {
    title: string;
    layout?: (
      | {
          content?: {
            label?: string;
            image1x1?: string | Image;
            id?: string;
          }[];
          id?: string;
          blockName?: string;
          blockType: 'faciSpaces';
        }
      | {
          content?: {
            label?: string;
            size?: number;
            description?: {
              [k: string]: unknown;
            }[];
            image?: string | Image;
            galleryImages?: {
              galleryImage?: string | Image;
              id?: string;
            }[];
            image9x16?: string | Image;
            image1x1?: string | Image;
            id?: string;
          }[];
          id?: string;
          blockName?: string;
          blockType: 'faciRooms';
        }
      | {
          hours?: string;
          email?: string;
          phone?: string;
          content?: {
            label?: string;
            description?: {
              [k: string]: unknown;
            }[];
            id?: string;
          }[];
          id?: string;
          blockName?: string;
          blockType: 'faciReadingRoom';
        }
      | {
          content?: {
            label?: string;
            type?: 'price' | 'files' | 'contacts';
            price?: {
              servicePrice?: string;
              unit?: 'eur' | 'eurh';
              description?: string;
            };
            files?: {
              content?: {
                label?: string;
                file?: string | Document;
                id?: string;
              }[];
            };
            contacts?: {
              name?: string;
              surname?: string;
              email?: string;
              phone?: string;
            };
            id?: string;
          }[];
          id?: string;
          blockName?: string;
          blockType: 'faciOther';
        }
    )[];
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Team {
  id: string;
  members?: {
    firstName?: string;
    lastName?: string;
    position?: string;
    email?: string;
    phone?: string;
    image: string | Image;
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Volunteering {
  id: string;
  columns?: {
    label?: string;
    description?: string;
    collapse?: {
      label?: string;
      description?: {
        [k: string]: unknown;
      }[];
      id?: string;
    }[];
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Footer {
  id: string;
  socials?: {
    linkName?: string;
    link?: string;
    id?: string;
  }[];
  requisites?: {
    [k: string]: unknown;
  }[];
  resources: string | Document;
  resources_hearing: string | Document;
  hours?: {
    weekdays?: string;
    friday?: string;
    administration?: string;
  };
  contacts?: {
    address?: string;
    email?: string;
    phone?: string;
  };
  additional?: {
    [k: string]: unknown;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Ucbanner {
  id: string;
  message: string;
  textColor: string;
  backgroundColor: string;
  updatedAt?: string;
  createdAt?: string;
}
export interface Cooky {
  id: string;
  lexicalRichText?: {
    [k: string]: unknown;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface ReadingRoom {
  id: string;
  image?: string | Image;
  layout?: (
    | {
        lexicalRichText?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'richText';
      }
    | {
        title: string;
        link?: string;
        id?: string;
        blockName?: string;
        blockType: 'button';
      }
    | {
        title: string;
        content?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'localizedTextCollapse';
      }
  )[];
  updatedAt?: string;
  createdAt?: string;
}
