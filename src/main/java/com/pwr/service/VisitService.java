package com.pwr.service;


import com.pwr.mappers.VisitMapper;
import com.pwr.mappers.VisitTOMapper;
import com.pwr.model.VisitEntity;
import com.pwr.model.VisitTO;
import com.pwr.repository.VisitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VisitService implements IVisitService {

    @Autowired
    private VisitRepository visitRepository;

    @Override
    public List<VisitTO> findAllVisits() {
        List<VisitTO> result = new ArrayList<>();
        visitRepository.findAll().forEach(visitEntity -> result.add(VisitMapper.mapVisit(visitEntity)));
        return result;
    }

    @Override
    public void registerVisit(VisitTO visit) {
        VisitEntity visitCreate = VisitTOMapper.mapVisitTO(visit);
        visitRepository.save(visitCreate);
    }
}
