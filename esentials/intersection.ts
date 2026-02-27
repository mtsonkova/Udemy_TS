// example of intersection of two sets

type FileData = {
  name: string;
  size: number;
  type: string;
};

type Status = {
  isActive: boolean;
  lastModified: Date;
};

type FileInfo = FileData & Status; // intersection of FileData and Status