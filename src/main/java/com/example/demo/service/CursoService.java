package com.example.demo.service;

import com.example.demo.dto.CursoCardDto;
import com.example.demo.dto.CursoDto;
import com.example.demo.entity.Curso;
import com.example.demo.mapper.CursoCardMapper;
import com.example.demo.mapper.CursoMapper;
import com.example.demo.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepository;

    @Value("${curso.upload.dir:uploads/}")
    private String uploadDir;

    public CursoDto salvarCurso(CursoDto cursoDto, MultipartFile foto) throws IOException {
        String fotoUrl = salvarFoto(foto);

        Curso curso = CursoMapper.INSTANCE.toModel(cursoDto);
        curso.setFotoUrl(fotoUrl);
        curso.setStatus("ativo");

        curso = cursoRepository.save(curso);

        return CursoMapper.INSTANCE.toDto(curso);
    }

    private String salvarFoto(MultipartFile foto) throws IOException {
        if (foto.isEmpty()) {
            throw new IllegalArgumentException("A foto é obrigatória.");
        }

        String contentType = foto.getContentType();
        if (contentType == null || !contentType.startsWith("image/")) {
            throw new IllegalArgumentException("O arquivo deve ser uma imagem válida.");
        }

        if (foto.getSize() > 5 * 1024 * 1024) { // 5 MB
            throw new IllegalArgumentException("O tamanho máximo da foto é 5MB.");
        }

        File uploadDirFile = new File(uploadDir);
        if (!uploadDirFile.exists()) {
            uploadDirFile.mkdirs();
        }

        String fileName = System.currentTimeMillis() + "_" + foto.getOriginalFilename();
        Path targetPath = Path.of(uploadDir, fileName);
        Files.copy(foto.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);

        return "/" + uploadDir + fileName;
    }

    public List<CursoCardDto> getCursosCard() {
        List<Curso> cursos = cursoRepository.findAll();
        
        return CursoCardMapper.INSTANCE.cursoToCursoCardDTOList(cursos);
    }
}