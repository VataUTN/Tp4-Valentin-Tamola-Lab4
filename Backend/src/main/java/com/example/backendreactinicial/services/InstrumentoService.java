package com.example.backendreactinicial.services;

import com.example.backendreactinicial.entities.Instrumento;

import java.util.List;

public interface InstrumentoService extends BaseService<Instrumento, Long>{

    public List<Instrumento> findTopByOrderByCantidadVendidaDesc() throws Exception;
}
