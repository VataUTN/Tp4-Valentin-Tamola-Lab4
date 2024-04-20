package com.example.backendreactinicial.services;

import com.example.backendreactinicial.entities.Instrumento;
import com.example.backendreactinicial.repositories.BaseRepository;
import com.example.backendreactinicial.repositories.InstrumentoRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.Root;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstrumentoServiceImp extends BaseServiceImp<Instrumento, Long> implements InstrumentoService{
    @Autowired
    private InstrumentoRepository instrumentoRepository;

    @Autowired
    private EntityManager entityManager;

    public InstrumentoServiceImp(BaseRepository<Instrumento, Long> baseRepository, InstrumentoRepository instrumentoRepository) {
        super(baseRepository);
        this.instrumentoRepository = instrumentoRepository;
    }

    @Override
    public List<Instrumento> findTopByOrderByCantidadVendidaDesc() throws Exception {
        try {
            CriteriaBuilder cb = entityManager.getCriteriaBuilder();
            CriteriaQuery<Instrumento> cq = cb.createQuery(Instrumento.class);
            Root<Instrumento> root = cq.from(Instrumento.class);

            // Convertir cantidadVendida a tipo numérico
            Expression<Integer> cantidadVendida = cb.sum(cb.literal(0), root.get("cantidadVendida").as(Integer.class));

            cq.select(root)
                    .orderBy(cb.desc(cantidadVendida));
            TypedQuery<Instrumento> query = entityManager.createQuery(cq).setMaxResults(3);
            return query.getResultList();
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }


}
