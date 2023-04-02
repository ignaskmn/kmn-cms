/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "featured".
 */
export interface Featured {
  id: string;
  items: {
    type?: 'news' | 'events' | 'projects';
    item?: string | Project;
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: string;
  slug?: string;
  title: string;
  type: 'residency' | 'exhibition' | 'education' | 'sound' | 'event' | 'screen' | 'massEvent';
  start?: string;
  end?: string;
  description?: {
    [k: string]: unknown;
  }[];
  image9x16: string | Image;
  image1x1?: string | Image;
  layout: (
    | {
        title?: string;
        participants: {
          firstName?: string;
          lastName?: string;
          nationality?: string;
          bio?: {
            [k: string]: unknown;
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
  )[];
  events: {
    childName?: string;
    event?: string | Event;
    id?: string;
  }[];
  news: {
    childName?: string;
    news?: string | News;
    id?: string;
  }[];
  tags?: string[] | Tag[];
  meta: {
    title?: string;
    description?: string;
    image?: string | Image;
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "images".
 */
export interface Image {
  id: string;
  alt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    thumbnail: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events".
 */
export interface Event {
  id: string;
  slug?: string;
  title: string;
  start?: string;
  description?: {
    [k: string]: unknown;
  }[];
  image9x16: string | Image;
  image1x1: string | Image;
  venue?: string;
  address?: string;
  layout: {
    title?: string;
    participants: {
      firstName?: string;
      lastName?: string;
      nationality?: string;
      bio?: {
        [k: string]: unknown;
      }[];
      id?: string;
    }[];
    id?: string;
    blockName?: string;
    blockType: 'participants';
  }[];
  tags?: string[] | Tag[];
  meta: {
    title?: string;
    description?: string;
    image?: string | Image;
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags".
 */
export interface Tag {
  id: string;
  tag?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news".
 */
export interface News {
  id: string;
  slug?: string;
  title: string;
  description?: {
    [k: string]: unknown;
  }[];
  image9x16: string | Image;
  image1x1: string | Image;
  tags?: string[] | Tag[];
  meta: {
    title?: string;
    description?: string;
    image?: string | Image;
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "menu".
 */
export interface Menu {
  id: string;
  menuItems: {
    label?: string;
    slug?: string;
    submenu?: boolean;
    submenuItems: {
      label?: string;
      slug?: string;
      id?: string;
    }[];
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "information".
 */
export interface Information {
  id: string;
  informationBlocks: {
    title: string;
    layout: (
      | {
          content: {
            label?: string;
            file?: string | Document;
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
          title?: string;
          content: {
            label?: string;
            file?: string | Document;
            id?: string;
          }[];
          id?: string;
          blockName?: string;
          blockType: 'infoCollapse';
        }
      | {
          content: {
            label?: string;
            file?: string | Document;
            id?: string;
          }[];
          id?: string;
          blockName?: string;
          blockType: 'infoBoxes';
        }
    )[];
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "documents".
 */
export interface Document {
  id: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "facilities".
 */
export interface Facility {
  id: string;
  facilityBlocks: {
    title: string;
    layout: (
      | {
          content: {
            label?: string;
            image1x1?: string | Image;
            id?: string;
          }[];
          id?: string;
          blockName?: string;
          blockType: 'faciSpaces';
        }
      | {
          content: {
            label?: string;
            size?: number;
            description?: {
              [k: string]: unknown;
            }[];
            image9x16: string | Image;
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
          content: {
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
          content: {
            label?: string;
            type?: 'price' | 'files' | 'contacts';
            price: {
              servicePrice?: string;
              unit?: 'eur' | 'eurh';
              description?: string;
            };
            files: {
              content: {
                label?: string;
                file?: string | Document;
                id?: string;
              }[];
            };
            contacts: {
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
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "team".
 */
export interface Team {
  id: string;
  members: {
    firstName?: string;
    lastName?: string;
    position?: string;
    email?: string;
    phone?: string;
    image?: string | Image;
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "volunteering".
 */
export interface Volunteering {
  id: string;
  columns: {
    label?: string;
    description?: string;
    collapse: {
      label?: string;
      description?: {
        [k: string]: unknown;
      }[];
      id?: string;
    }[];
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "income-tax".
 */
export interface IncomeTax {
  id: string;
  subtitle?: string;
  description?: {
    [k: string]: unknown;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  socials: {
    linkName?: string;
    link?: string;
    id?: string;
  }[];
  requisites?: {
    [k: string]: unknown;
  }[];
  hours?: {
    [k: string]: unknown;
  }[];
  contacts: {
    address?: string;
    email?: string;
    phone?: string;
  };
  additional?: {
    [k: string]: unknown;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "examples".
 */
export interface Example {
  id: string;
  thisIsAField?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  slug: string;
  description?: {
    [k: string]: unknown;
  }[];
  image9x16?: string | Image;
  image1x1?: string | Image;
  meta: {
    title?: string;
    description?: string;
    image?: string | Image;
  };
  createdAt: string;
  updatedAt: string;
}
